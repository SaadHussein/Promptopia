import React, { Fragment } from "react";
import PromptCard from "./PromptCard";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    router.replace("/");
  }

  return (
    <Fragment>
      {!session && <p>Loading...</p>}
      {session && (
        <section className="w-full">
          <h1 className="head_text text-left">
            <span className="blue_gradient">{name} Profile</span>
          </h1>
          <p className="desc text-left">{desc}</p>
          <div className="mt-10 prompt_layout">
            {data.map((post) => (
              <PromptCard
                key={post._id}
                post={post}
                handleEdit={() => handleEdit && handleEdit(post)}
                handleDelete={() => handleDelete && handleDelete(post)}
              />
            ))}
          </div>
        </section>
      )}
    </Fragment>
  );
};

export default Profile;
