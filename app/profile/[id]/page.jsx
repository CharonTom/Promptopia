"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

function UserProfile({ params }) {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params.id}/posts`);
      const data = await response.json();

      setPosts(data);
    };

    if (params?.id) fetchPosts();
  }, [params.id]);

  return (
    <div>
      <Profile
        name={userName}
        desc={`Welcome on the ${userName}'s profile page`}
        data={posts}
      />
    </div>
  );
}

export default UserProfile;
