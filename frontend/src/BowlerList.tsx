import { useEffect, useState } from 'react';
import { bowler } from './types/bowler';

function BowlerList() {
  const [bowlers, setBowlers] = useState<bowler[]>([]);
  // useEffect - so we do not ping our json file to death.
  useEffect(() => {
    const fetchbowler = async () => {
      const response = await fetch('https://localhost:5000/Bowler');
      const data = await response.json();
      setBowlers(data);
    };
    fetchbowler();
  }, []);

  //   Filter to only include Marlins and Sharks
  const allowedTeams = ['Marlins', 'Sharks'];
  const filteredBowlers = bowlers.filter(
    (b) => b.teamName.teamName && allowedTeams.includes(b.teamName.teamName)
  );

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Bowler Name</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {/* Use the filtered bowlers to display only bowlers who are Marlins or Sharks*/}
          {filteredBowlers.map((b) => (
            <tr key={b.bowlerID}>
              <td>
                {b.bowlerFirstName}{' '}
                {b.bowlerMiddleInit ? b.bowlerMiddleInit + '. ' : ''}
                {b.bowlerLastName}
              </td>
              {/* Look at the json file and what it is returning - this was returning a team within a teamName variable...  */}
              <td>{b.teamName.teamName}</td>
              <td>{b.bowlerAddress}</td>
              <td>{b.bowlerCity}</td>
              <td>{b.bowlerState}</td>
              <td>{b.bowlerZip}</td>
              <td>{b.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlerList;
