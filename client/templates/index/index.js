Template.index.events({
    'click #facebook-login': function(event) {
        Meteor.loginWithFacebook({}, function(err) {
            if (err) {
                throw new Meteor.Error("Facebook login failed");
            }
        });
    },
});
Template.userCheck.rendered = function() {
    if (Meteor.user().profile.number === undefined) {
        document.getElementById('needMobile').style.display = 'block';
        document.getElementById('main').style.display = 'none';
    } else {
        document.getElementById('needMobile').style.display = 'none';
        document.getElementById('main').style.display = 'block';
    }
};