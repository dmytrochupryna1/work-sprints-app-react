// LogTable.js
import React from 'react';

const LogTable = ({ logs }) => {
  return (
    <div className="log-table">
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Title</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index}>
              <td>{log.type}</td>
              <td>{log.title}</td>
              <td>{new Date(log.startTime).toLocaleTimeString()}</td>
              <td>{new Date(log.endTime).toLocaleTimeString()}</td>
              <td>{Math.floor((log.endTime - log.startTime) / 1000)} seconds</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LogTable;
