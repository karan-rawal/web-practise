class User:
    __fname = None
    __lname = None
    
    def __init__(self, fname, lname):
        self.__fname = fname
        self.__lname = lname

    def __str__(self):
        return "{} {}".format(self.__fname, self.__lname)

    def getFname(self):
        return self.__fname

    def getLname(self):
        return self.__lname

    def setFname(self, fname):
        self.__fname = fname

    def setLname(self, lname):
        self.__lname = lname