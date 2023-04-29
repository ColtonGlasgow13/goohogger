export const isUserAssignedToMonster = async (uid, idToken) => {
    try {
      const response = await fetch(process.env.REACT_APP_NETLIFY_TEST_FUNCTIONS_URL + `getAssignedWidget?uid=${uid}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${idToken}`,
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('User is assigned:', data);
        
        return !!data;

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
      return true;
    } else {
      console.error('Failed to check user existence:', response.statusText);
      return false;
    }
  } catch (error) {
    console.error('Error checking user existence:', error);
    return false;
  }
};


export const getUserAssignedWidget = async (uid, idToken) => {
  try {
    const response = await fetch(process.env.REACT_APP_NETLIFY_TEST_FUNCTIONS_URL + `getAssignedWidget?uid=${uid}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${idToken}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log('User assigned:', data);
      
      if (!data) {
        console.error('User has no assigned widget:', response.statusText)
      } else {
        return { widgetName: data.widgetName, statsDetails: data.statsDetails };
      }

    } else {
      console.error('Failed to get assigned widget:', response.statusText);
    }
  } catch (error) {
    console.error('Failed to get assigned widget:', error);
  }
};