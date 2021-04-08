({
    doInitHelper: function (cmp) {
      var action = cmp.get("c.getStudent");
  
      action.setParams({
        recordId: cmp.get("v.recordId")
      });
  
      action.setCallback(this, function (results) {
        var status = results.getState();
        if (status === "SUCCESS") {
          console.log(status);
         cmp.set("v.studentList",results.getReturnValue());
      
        }
      });
      $A.enqueueAction(action);
    }
  });