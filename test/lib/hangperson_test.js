var expect = require('chai').expect;

var Hangperson = require('../../lib/hangperson');

describe('hangperson', function() {
	describe('constructor', function() {
		describe('with string', function() {
			it('stores the string', function() {
				var game = new Hangperson("test");

				expect(game.word).to.eql("test");
			});
		});
	});

	describe('serialize/deserialize', function() {
		it('can be rebuilt from a serialized state', function() {
			var game = new Hangperson("somelongword");
			game.guess("a");
			game.guess("q");

			var saved = game.serialize();
			var game2 = new Hangperson(saved);

			expect(game.word).to.eql(game2.word);
			expect(game.guessesRemaining).to.eql(game2.guessesRemaining);
		})
	})
})