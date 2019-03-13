
export const formatSessionData = activites => {
    return activites.reduce((acc, curr) => {
      const activity = acc.find(section => section.title === curr.category);
      activity
        ? activity.data.push(curr)
        : acc.push({title: curr.category, data: [curr]});
      return acc;
    }, []);
  };

  //Helpers Function