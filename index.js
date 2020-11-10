function findMatching(drivers, str){
   return drivers.filter(name => 
      name.toLowerCase() === str.toLowerCase()
  )
}

function fuzzyMatch(drivers, str){
  return drivers.filter(name => 
     name.startsWith(str)
  )
}

function matchName(drivers, str) {
  return drivers.filter(obj => {
    return obj.name === str 
  })
}
=======
      return name.charAt(0).toUpperCase() === str.charAt(0).toUpperCase(){
        
      } 
  })
}
>>>>>>> 82b77e55816622b0521d83ddd1b236c38bab88cf
