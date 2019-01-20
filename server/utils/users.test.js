    const expect = require('expect');

    const {Users} = require('./users');

    describe('Users', () => {

        beforeEach(() => {
            users = new Users();

            users.users = [
                {
                    id: '1',
                    name: 'Albert',
                    room: 'Node Course'
                },
                {
                    id: '2',
                    name: 'Bob',
                    room: 'React Course'
                },
                {
                    id: '3',
                    name: 'Cedric',
                    room: 'Node Course'
                }
            ]
        });

        it('Should add new user', () => {
            var users = new Users();
            var user = {
                id: '123',
                name: 'Bob',
                room: 'The Kitchen'
            };
            var resUser = users.addUser(user.id, user.name, user.room)
            expect(users.users).toEqual([user]);
        });

        it('Should remove a user', () => {
            var user = users.removeUser('2');
            expect(user.id).toBe('2');
            expect(users.users.length).toBe(2);

        })

        it('Should not remove a user', () => {
            var user = users.removeUser('10');
            expect(user).toNotExist();
            expect(users.users.length).toBe(3);

        })

        it('Should find a user', () => {
            var usersList = users.getUser('3');
            expect(usersList).toEqual(users.users[2]);
        })

        it('Should not find a user', () => {
            var usersList = users.getUser('4');
            expect(usersList).toNotExist();
        });

        it('Should return names for Node Course', () => {
            var usersList = users.getUserList('Node Course');
            expect(usersList).toEqual(['Albert', 'Cedric']);
        });

        it('Should return names for React Course', () => {
            var usersList = users.getUserList('React Course');
            expect(usersList).toEqual(['Bob']);
        })
    });