const assert = require('assert');
const sinon = require('sinon');
const Userdb = require('../server/model/model.js');
const { create, find, update, delete: deleteUser } = require('../server/controller/controller.js');

describe('User Operations', function() {
    describe('Create User', function() {
        it('should create a new user', function() {
            const req = {
                body: {
                    name: 'John Doe',
                    email: 'john@example.com',
                    gender: 'Male',
                    status: 'Active'
                }
            };
            const res = {
                status: function(code) {
                    assert.strictEqual(code, 200);
                    return this;
                },
                redirect: function(route) {
                    assert.strictEqual(route, '/add-user');
                }
            };

            const saveStub = sinon.stub(Userdb.prototype, 'save');
            saveStub.resolves(req.body);

            create(req, res);

            sinon.assert.calledOnce(saveStub);
            saveStub.restore();
        });

        it('should handle empty request body', function() {
            const req = {
                body: null
            };
            const res = {
                status: function(code) {
                    assert.strictEqual(code, 400);
                    return this;
                },
            };

            create(req, res);
        });
    });
    describe('Find User by ID', function() {
            it('should find a user by ID', function() {
                const req = {
                    query: {
                        id: 'user_id_here' // Replace with an actual user ID in your database
                    }
                };
                const foundUser = {
                    _id: '3', // Replace with an actual user ID in your database
                    name: 'John Doe',
                    email: 'jdoe@gmail.com',
                    gender: 'Male',
                    status: 'Active'
                };
                const res = {
                    send: function(data) {
                        assert.deepStrictEqual(data, foundUser);
                    },
                    status: function(code) {
                        assert.strictEqual(code, 200);
                        return this;
                    }
                };
    
                const findByIdStub = sinon.stub(Userdb, 'findById');
                findByIdStub.resolves(foundUser);
    
                find(req, res);
    
                sinon.assert.calledOnce(findByIdStub);
                findByIdStub.restore();
            });
    
            it('should handle not finding a user by ID', function() {
                const req = {
                    query: {
                        id: '-1' // Use a non-existing user ID
                    }
                };
                const res = {
                    status: function(code) {
                        assert.strictEqual(code, 404);
                        return this;
                    },
                    send: function(data) {
                        assert.strictEqual(data.message, 'Not found user with id non_existing_user_id');
                    }
                };
    
                const findByIdStub = sinon.stub(Userdb, 'findById');
                findByIdStub.resolves(null);
    
                find(req, res);
    
                sinon.assert.calledOnce(findByIdStub);
                findByIdStub.restore();
            });

            it('should handle errors while finding all users', function() {
                const req = {
                    query: {}
                }
                const res = {
                    status: function(code) {
                        assert.strictEqual(code, 500);
                        return this;
                    }
                };
        
                const findStub = sinon.stub(Userdb, 'find');
                findStub.rejects(new Error('Error')); // Simulating a database error
        
                find(req, res);
        
                sinon.assert.calledOnce(findStub);
                findStub.restore();
            });

    
    });
    describe('Delete User', function() {
        it('should handle not finding a user to delete', function() {
            const req = {
                params: {
                    id: '720587052'
                }
            };
            const res = {
                status: function(code) {
                    assert.strictEqual(code, 404);
                    return this;
                }
            };
    
            const findByIdAndDeleteStub = sinon.stub(Userdb, 'findByIdAndDelete');
            findByIdAndDeleteStub.resolves(null); // Simulating user not found
    
            deleteUser(req, res);
    
            sinon.assert.calledOnce(findByIdAndDeleteStub);
            findByIdAndDeleteStub.restore();
        });

        it('should delete a user by ID', function() {
            const req = {
                params: {
                    id: '1'
                }
            };
            const res = {
                send: function(data) {
                    assert.deepStrictEqual(data, { message: 'User was deleted successfully!' });
                },
                status: function(code) {
                    assert.strictEqual(code, 200);
                    return this;
                }
            };
    
            const findByIdAndDeleteStub = sinon.stub(Userdb, 'findByIdAndDelete');
            findByIdAndDeleteStub.resolves({ message: 'User was deleted successfully!' });
    
            deleteUser(req, res);
    
            sinon.assert.calledOnce(findByIdAndDeleteStub);
            findByIdAndDeleteStub.restore();
        });
    
        // Add other test cases for handling errors while deleting user and other scenarios
    });
    describe('Update User', function() {
        it('should handle not finding a user to update', function() {
            const req = {
                params: {
                    id: '57289729587'
                },
                body: {
                    name: 'Lionel Messi'
                }
            };
            const res = {
                status: function(code) {
                    assert.strictEqual(code, 404);
                    return this;
                }
            };
    
            const findByIdAndUpdateStub = sinon.stub(Userdb, 'findByIdAndUpdate');
            findByIdAndUpdateStub.resolves(null); // Simulating user not found
    
            update(req, res);
    
            sinon.assert.calledOnce(findByIdAndUpdateStub);
            findByIdAndUpdateStub.restore();
        });
        it('should handle empty update data', function() {
            const req = {
                params: {
                    id: '1' 
                },
                body: {} // Empty update data
            };
            const res = {
                status: function(code) {
                    assert.strictEqual(code, 400);
                    return this;
                }
            };
    
            update(req, res);
        });
    });
});
