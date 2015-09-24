var assert = chai.assert;

describe( 'main tests', function() {

  it( 'should have a default greeting', function() {
    var result = main.buildGreeting();
    assert.equal( result, 'hello, world' );
  } );

} );

