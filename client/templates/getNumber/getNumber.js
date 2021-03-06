if (Meteor.isClient) {
  Template.getNumber.events({
    'submit form': function(event, template) {
      event.preventDefault();
      var phoneNumberVar = template.find('#signUpCell').value;
      var phoneProviderVar = template.find('#signUpProvider').value;
      var smsEmailVar = (phoneNumberVar + phoneProviderVar);
      Meteor.users.update({
        _id: Meteor.userId()
      }, {
        $set: {
          'profile.number': phoneNumberVar,
          'profile.smsAddress': smsEmailVar
        }
      });
      window.setTimeout(function() {
        window.location.reload();
      }, 1000);
    }
  });
}