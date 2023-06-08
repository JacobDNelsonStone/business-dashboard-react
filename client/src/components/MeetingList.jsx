import React from 'react';

const MeetingsList = () => {

  return (
    <div>
      <h2>Meetings List</h2>
      <table>
        <thead>
          <tr>
            <th>Bussiess Dash</th>
            <th>Time</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {meetings.map((meeting) => (
            <tr key={meeting.id}>
              <td>{meeting.title}</td>
              <td>{meeting.time}</td>
              <td>{meeting.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MeetingsList;