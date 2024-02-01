let i = view_list.findIndex(function(element) { 
    let rect = element.getBoundingClientRect(); 
    console.log( (Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top,0)) /Math.min(rect.height, window.innerHeight)); 
    return (Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top,0)) /Math.min(rect.height, window.innerHeight) >= 0.3; 
   });
