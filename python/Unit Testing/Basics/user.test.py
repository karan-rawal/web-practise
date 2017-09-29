import unittest
from user import User

class UserTest(unittest.TestCase):
    __test_fname = 'Karan'
    __test_lname = 'Rawal'
    __user = User(__test_fname, __test_lname)

    def test_getFname(self):
        self.assertEqual(self.__user.getFname(), self.__test_fname)

    def test_getLname(self):
        self.assertEqual(self.__user.getLname(), self.__test_lname)

suite = unittest.TestLoader().loadTestsFromTestCase(UserTest)
unittest.TextTestRunner(verbosity=2).run(suite)