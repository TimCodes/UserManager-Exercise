// Builds summary stats and sorts user data
const FormatUserData = (users) => {
  let userData = users.reduce(
    (acc, user) => {
      const { invited_users_count, published_campaigns_count } = user.stats;

      // add camapign if not null, could use type coercion here 
      // instead to convert null to 0
      acc.totalCampaigns += published_campaigns_count
        ? published_campaigns_count
        : 0;
      acc.totalUserInvites += invited_users_count ? invited_users_count : 0;
      
      // convert to date obj for easier sorting
      user.created_at = new Date(user.created_at);

      user.invites = invited_users_count;
      user.campaigns =  published_campaigns_count;
      acc.users.push(user);

      return acc;
    },

    { totalCampaigns: 0, totalUserInvites: 0, users: [] }
  );
  
  // sort users desc by created_at date 
  userData.users.sort((a, b) => {
    return b.created_at - a.created_at;
  });

  // convert to datestring so react can render
  userData.lastCreatedAt = userData.users[0].created_at.toDateString();
  userData.totalteamMembers = userData.users.length;

  return userData;
};

export { FormatUserData };
