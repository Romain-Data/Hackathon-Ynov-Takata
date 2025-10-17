import pandas as pd
from sqlalchemy import create_engine, text, inspect

tables = ['user', 'baby_foot_table', 'game', 'user_game']

user = 'deploy'
password = 'xxxx'
host = '10.238.109.64'
port = '3306'
database_name = 'takata'

engine = create_engine(
    f'mysql+pymysql://{user}:{password}@{host}:{port}/{database_name}')
    

inspector = inspect(engine)

for table in tables[::-1]:
    # Vérifier si la table existe
    if table in inspector.get_table_names():
        with engine.connect() as conn:
            conn.execute(text(f"TRUNCATE TABLE {table}"))
            conn.commit()
    else:
        print(f"Table '{table}' n'existe pas, création...")

    df = pd.read_csv(f'data/{table}.csv') 
    df['version'] = 0 
    df.to_sql(table, engine, if_exists='append', index=False)