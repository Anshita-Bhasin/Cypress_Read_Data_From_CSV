
import { faker } from '@faker-js/faker';
const csv = require('neat-csv')
let regData

describe('Registration Form', () => {
    before(() => {
        cy.fixture("users.csv")
            .then(csv)
            .then((data) => {
                regData = data
            })
    })

    it(' Fill Reg Form for different users ', () => {
        for (let i = 0; i < regData.length; i++) {
            cy.visit('')
            cy.get('#input-firstname').type(regData[i]['firstName']);
            cy.get('#input-lastname').type(regData[i]['lastName']);
            cy.get('#input-email').type(faker.datatype.uuid() + regData[i]['Email']);
            cy.get('#input-telephone').type(regData[i]['Telephone']);
            cy.get('#input-password').type(regData[i]['Password']);
            cy.get('#input-confirm').type(regData[i]['Password']);
            cy.get('input[type="checkbox"]').check()
            cy.get('input.btn.btn-primary').click()
            cy.get('a[data-toggle="dropdown"]').first().click()
            cy.contains('Logout').click()
        }

    })

})