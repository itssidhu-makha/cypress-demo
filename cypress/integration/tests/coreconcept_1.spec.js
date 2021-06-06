describe('Core concept suite',()=>{

before('initialise data',()=>{
    
    cy.visit('https://demoqa.com/automation-practice-form')   
    
   cy.on('uncaught:exception',()=>{
       return false
   })
})

beforeEach('initialise test data',()=>{
    cy.get('#lastName').as('MyLastName')
    cy.get('#firstName').as('firstname',{timeout:3000})
    
})

it('test one',()=>{
    //BDD Asserions - IMplicit

    
    cy.get('@firstname').type('first name').then(($ele)=>{
        cy.wrap($ele).clear().type('new value')
    })  

   
    
})

it('test2',()=>{
    cy.get('@MyLastName').type('Last name')
    cy.get('@MyLastName').should('have.prop','class').then((text)=>{
        cy.log(text)
    })

    cy.get('@MyLastName').should('be.visible').and('not.be.visible')//overall time = 6
    //cy.get('@MyLastName').should('not.be.visible')

    cy.get('@MyLastName').then(($ele)=>{
        const height = $ele.innerHeight()
        //expect($ele).not.to.be.visible
        expect(height).to.equal(36)
        
    })
    const a =true
    assert.isBoolean(a,'is it a boolean')

})

})
