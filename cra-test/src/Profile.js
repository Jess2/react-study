import React, { useState } from 'react';
import useUser from './useUser';

export default function Profile() {
  const [userId, setUserId] = useState(0);
  const user = useUser(userId);

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
