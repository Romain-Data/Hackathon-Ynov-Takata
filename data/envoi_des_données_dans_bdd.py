import pandas as pd
from sqlalchemy import create_engine, text

tables = ['user', 'baby_foot_table', 'game', 'user_game']

user = 'deploy'
password = 'xxxx'
host = '10.238.109.64'
port = '3306'
database_name = 'takata'

engine = create_engine(
    f'mysql+pymysql://{user}:{password}@{host}:{port}/{database_name}')
    

for table in tables[::-1]:
    df = pd.read_csv(f'data/{table}.csv')  
    if 'id' in df.columns:
        df = df.drop('id', axis=1)
    df.to_sql(table, engine, if_exists='replace', index=False)
