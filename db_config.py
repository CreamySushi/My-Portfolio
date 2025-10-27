import MySQLdb
def db_connection():
    return MySQLdb.connect (
        host = "localhost",
        user = "root",
        passwd = "#Uphsl123",
        database = "hotel_db",
    )