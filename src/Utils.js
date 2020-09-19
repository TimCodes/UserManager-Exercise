const FormatUserData = (users) => {
  let userData = users.reduce(
    (acc, user) => {
      const { invited_users_count, published_campaigns_count } = user.stats;
      acc.totalCampaigns += published_campaigns_count
        ? published_campaigns_count
        : 0;
      acc.totalUserInvites += invited_users_count ? invited_users_count : 0;

      user["created_at"] = new Date(user["created_at"]);
      acc.users.push(user);

      return acc;
    },

    { totalCampaigns: 0, totalUserInvites: 0, users: [] }
  );

  userData.users.sort((a, b) => {
    return b["created_at"] - a["created_at"];
  });

  userData.lastCreated = userData.users[0].created_at;
  userData.totalteamMembers = userData.users.length;

  return userData;
};

export { FormatUserData };
