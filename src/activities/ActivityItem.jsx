import { deleteActivity, getActivity } from "../api/activities";
import { useAuth } from "../auth/AuthContext";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

export default function ActivityItem() {
  const { token } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const [activity, setActivity] = useState(null);
  const [setError] = useState(null);

  useEffect(() => {
    const syncActivity = async () => {
      const data = await getActivity(id);
      setActivity(data);
    };
    syncActivity();
  }, [id]);

  const tryDelete = async () => {
    setError(null);

    try {
      await deleteActivity(token, activity.id);
      navigate("/activities");
    } catch (err) {
      setError(err.message);
    }
  };

  if (!activity) return <p>Please wait</p>;

  return (
    <article>
      <h1>{activity.name}</h1>
      {token && <button onClick={tryDelete}>Delete</button>}
    </article>
  );
}
