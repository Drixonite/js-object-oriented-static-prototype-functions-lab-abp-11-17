function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function(){
  let icebreakers = []
  emails.forEach(function(email){
    icebreakers.push(new IcebreakerResponse(email))
  })
  return icebreakers
}
