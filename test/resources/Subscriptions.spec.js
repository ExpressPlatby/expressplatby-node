'use strict';

const expressPayments = require('../testUtils.js').getSpyableExpressPayments();
const expect = require('chai').expect;

describe('subscriptions Resource', () => {
    describe('retrieve', () => {
        it('Sends the correct request', () => {
            expressPayments.subscriptions.retrieve('test_sub');
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/subscriptions/test_sub',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('del', () => {
        it('Sends the correct request', () => {
            expressPayments.subscriptions.del('test_sub');
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'DELETE',
                url: '/v1/subscriptions/test_sub',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('update', () => {
        it('Sends the correct request', () => {
            expressPayments.subscriptions.update('test_sub', {
                metadata: {a: '1234'},
            });
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/subscriptions/test_sub',
                headers: {},
                data: {
                    metadata: {a: '1234'},
                },
                settings: {},
            });
        });
    });

    describe('create', () => {
        it('Sends the correct request', () => {
            expressPayments.subscriptions.create({
                customer: 'test_cus',
                plan: 'gold',
            });

            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/subscriptions',
                headers: {},
                data: {
                    customer: 'test_cus',
                    plan: 'gold',
                },
                settings: {},
            });
        });
    });

    describe('update with items array', () => {
        it('Sends the correct request', () => {
            expressPayments.subscriptions.update('test_sub', {
                items: [
                    {
                        plan: 'foo',
                        quantity: 2,
                    },
                ],
            });
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/subscriptions/test_sub',
                headers: {},
                data: {
                    items: [
                        {
                            plan: 'foo',
                            quantity: 2,
                        },
                    ],
                },
                settings: {},
            });
        });
    });

    describe('create with items array', () => {
        it('Sends the correct request', () => {
            expressPayments.subscriptions.create({
                items: [
                    {
                        plan: 'foo',
                        quantity: 2,
                    },
                ],
            });

            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/subscriptions',
                headers: {},
                data: {
                    items: [
                        {
                            plan: 'foo',
                            quantity: 2,
                        },
                    ],
                },
                settings: {},
            });
        });
    });

    describe('update with items object', () => {
        it('Sends the correct request', () => {
            expressPayments.subscriptions.update('test_sub', {
                items: {
                    '0': {
                        plan: 'foo',
                        quantity: 2,
                    },
                },
            });
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/subscriptions/test_sub',
                headers: {},
                data: {
                    items: {
                        '0': {
                            plan: 'foo',
                            quantity: 2,
                        },
                    },
                },
                settings: {},
            });
        });
    });

    describe('create with items object', () => {
        it('Sends the correct request', () => {
            expressPayments.subscriptions.create({
                items: {
                    '0': {
                        plan: 'foo',
                        quantity: 2,
                    },
                },
            });

            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'POST',
                url: '/v1/subscriptions',
                headers: {},
                data: {
                    items: {
                        '0': {
                            plan: 'foo',
                            quantity: 2,
                        },
                    },
                },
                settings: {},
            });
        });
    });

    describe('list', () => {
        it('Sends the correct request', () => {
            expressPayments.subscriptions.list({
                limit: 3,
                customer: 'test_cus',
                plan: 'gold',
            });
            expect(expressPayments.LAST_REQUEST).to.deep.equal({
                method: 'GET',
                url: '/v1/subscriptions?limit=3&customer=test_cus&plan=gold',
                headers: {},
                data: {},
                settings: {},
            });
        });
    });

    describe('Discount methods', () => {
        describe('deleteDiscount', () => {
            it('Sends the correct request', () => {
                expressPayments.subscriptions.deleteDiscount('test_sub');
                expect(expressPayments.LAST_REQUEST).to.deep.equal({
                    method: 'DELETE',
                    url: '/v1/subscriptions/test_sub/discount',
                    headers: {},
                    data: {},
                    settings: {},
                });
            });
        });
    });
});
