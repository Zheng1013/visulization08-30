import pandas as pd
from flask import Flask , render_template

app = Flask(__name__)

@app.route('/')
def formPage():
    df = pd.read_csv('https://www.taifex.com.tw/data_gov/taifex_open_data.asp?data_name=DailyForeignExchangeRates',encoding="cp950")

    # df.head()
    # df.isnull().any()

    df.drop(df.iloc[:,5:],axis=1,inplace=True)
    df.drop(df.iloc[:,2:4],axis=1,inplace=True)

    df.columns = ['Date','USD-TWD','USD-JPY']

    df['TWD-JPY'] = df['USD-TWD']/df['USD-JPY']

    df.drop(df.iloc[:,1:3],axis=1,inplace=True)

    df['Date'] = pd.to_datetime(df['Date'],format="%Y%m%d")
    df['Date'] = df['Date'].astype(str)

    result = df.to_json(orient="records")

    return render_template ('index.html',exchangeData=result)

if __name__ == "__main__" :
    app.run()