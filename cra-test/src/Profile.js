import React, { useState, useEffect } from 'react';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(0);

  useEffect(() => {
    getUserApi(userId).then(data => setUser(data));
  }, [userId]);

  return (
    <div>
      <button onClick={() => setUserId(userId + 1)}>userId 변경</button>
      {!user && <p>사용자 정보를 가져오는 중...</p>}
      {user && (
        <>
          <p>{`name is ${user.name}`}</p>
          <p>{`age is ${user.age}`}</p>
        </>
      )}
    </div>
  );
}

const USER1 = { name: 'mike', age: 23 };
const USER2 = { name: 'jane', age: 31 };

function getUserApi(userId) {
  return new Promise(result => {
    setTimeout(() => {
      result(userId % 2 ? USER1 : USER2);
    }, 500);
  });
}