var expect = chai.expect;

describe( 'MainTest', function() {

  it( 'sanity', function() {
    var result = sayHello();
    expect( result ).to.equal( 'hello, world' );
  });

});

