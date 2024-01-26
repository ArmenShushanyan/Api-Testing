describe('Api testing', () => {
  const randomData = Date.now().toString();
  beforeEach(() => {
    cy.addData(randomData);
  })

  it('Api testing positive case', function () {
    cy.createUser(this.data).then(response => {
      expect(response.body.name).to.eq(randomData);
      expect(response.body.email).to.eq(`${randomData}@gmail.com`);

      const id = response.body.id;

      cy.getUser(id).then(response => {
        expect(response.body.id).to.not.be.null;
        expect(response.body.id).to.eq(id);
        expect(response.body.name).to.eq(randomData);
        expect(response.body.email).to.eq(`${randomData}@gmail.com`);
      });

      cy.deleteUser(id).then(response => {
        expect(response.status).to.eq(204);
      });
    });
  });
});