export const addWidget = async (title) => {
    const response = await fetch(process.env.REACT_APP_NETLIFY_FUNCTIONS_URL + '/addWidget', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    if (!response.ok) {
        throw new Error("Failed to add widget");
      }
};


export const checkUserExists = async (uid, idToken) => {
    try {
      const response = await fetch(process.env.REACT_APP_NETLIFY_TEST_FUNCTIONS_URL + `doesUserExist?uid=${uid}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${idToken}`,
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('User exists:', data.userExists);
        return data.userExists;
      } else {
        console.error('Failed to check user existence:', response.statusText);
        return false;
      }
    } catch (error) {
      console.error('Error checking user existence:', error);
      return false;
    }
  };


  export const isUserAssignedToMonster = async (uid, idToken) => {
    try {
      const response = await fetch(process.env.REACT_APP_NETLIFY_TEST_FUNCTIONS_URL + `isUserAssignedToMonster?uid=${uid}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${idToken}`,
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('User assigned:', data.userIsAssignedToMonster);
        return data.userIsAssignedToMonster;
      } else {
        console.error('Failed to check user existence:', response.statusText);
        return false;
      }
    } catch (error) {
      console.error('Error checking user existence:', error);
      return false;
    }
  };


export const assignUserToMonster = async (uid, idToken) => {
  try {
    const response = await fetch(process.env.REACT_APP_NETLIFY_TEST_FUNCTIONS_URL + `assignUserToMonster?uid=${uid}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${idToken}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log('User assigned:');
      return data.userIsAssignedToMonster;
    } else {
      console.error('Failed to check user existence:', response.statusText);
      return false;
    }
  } catch (error) {
    console.error('Error checking user existence:', error);
    return false;
  }
};