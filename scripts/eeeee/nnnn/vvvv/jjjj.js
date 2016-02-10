/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 //	return apsdb.callApi("ListConfiguration", null, null).result.defaultGitWebhookId;
		return apsdb.callApi('ListConfiguration', null, null).result.gitPurge;			