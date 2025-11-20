//changed usePage to Link
//Removed useState and deleteActivity, these will be moved to ActivityItem
import { Link } from "react-router";

export default function ActivityList({ activities }) {
  return (
    <ul>
      {activities.map((activity) => (
        <ActivityListItem key={activity.id} activity={activity} />
      ))}
    </ul>
  );
}

function ActivityListItem({ activity }) {
  return (
    <li>
      <Link to={"/activities/" + activity.id}>{activity.name}</Link>
    </li>
  );
}
