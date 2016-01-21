/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 

return result = apsdb.callApi('SaveGroup',{'groupName':'deployment-execute'},null); 		   
	