# %% [markdown]
# # LSTM Stock Prediction Model
# By Joshua Jenkins

# %%
import pandas as pd
import numpy as np
from sklearn.model_selection import TimeSeriesSplit
from sklearn.preprocessing import MinMaxScaler
from keras.layers import LSTM, Dense
from keras.models import Sequential
import yfinance as yf

def predict_stock_price(ticker, start_date):
    # Get the Dataset
    end_date = pd.Timestamp.now().strftime("%Y-%m-%d")
    data = yf.download(ticker, start=start_date, end=end_date)

    # Set target variable as the closing price
    output_var = pd.DataFrame(data['Adj Close'])
    # Selecting the features
    features = ['Open', 'High', 'Low', 'Volume']

    # Setting up scaler
    scaler = MinMaxScaler()
    feature_transform = scaler.fit_transform(data[features])
    feature_transform = pd.DataFrame(data=feature_transform, columns=features, index=data.index)

    # Splitting to train and test set
    timesplit = TimeSeriesSplit(n_splits=10)
    for train_index, test_index in timesplit.split(feature_transform):
        X_train, X_test = feature_transform[:len(train_index)], feature_transform[len(train_index): (len(train_index) + len(test_index))]
        Y_train, Y_test = output_var[:len(train_index)].values.ravel(), output_var[len(train_index): (len(train_index) + len(test_index))].values.ravel()

    # Data Proessing for LSTM
    trainX = np.array(X_train)
    testX = np.array(X_test)
    X_train = trainX.reshape(trainX.shape[0], 1, trainX.shape[1])
    X_test = testX.reshape(testX.shape[0], 1, testX.shape[1])

    # LSTM Model
    lstm = Sequential()
    lstm.add(LSTM(32, input_shape=(1, trainX.shape[1]), activation='relu', return_sequences=False))
    lstm.add(Dense(1))
    lstm.compile(loss='mean_squared_error', optimizer='adam')

    # Training the Model
    lstm.fit(X_train, Y_train, epochs=200, batch_size=8, verbose=0, shuffle=False)

    # Prediction
    latest_data = data.iloc[-1][features].values.reshape(1, len(features))
    latest_data_scaled = scaler.transform(latest_data.reshape(1, -1))
    next_day_prediction = lstm.predict(latest_data_scaled.reshape(1, 1, len(features)))

    return next_day_prediction[0, 0]