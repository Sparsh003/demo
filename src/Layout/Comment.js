import React from "react";

const Comment = ({ comment }) => {
  return (
    <div>
      <div>
        <ul role="list" className="divide-y divide-gray-200">
          <li className="py-4">
            <div className="flex space-x-3">
              <div className="flex-1 space-y-1 text-left">
                <p className="text-xl font-semibold">{comment.name}</p>
                <p className="italic text-sm">{comment.email}</p>
                <p className="text-sm text-gray-500">{comment.body}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Comment;
