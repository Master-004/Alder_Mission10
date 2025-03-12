// These names need to be just like they are in the incoming json file
export type Team = {
  teamID: number;
  teamName: string;
  captainID: number;
};

export type bowler = {
  bowlerID: number;
  bowlerFirstName: string;
  bowlerMiddleInit: string;
  bowlerLastName: string;
  bowlerAddress: string;
  bowlerCity: string;
  bowlerState: string;
  bowlerZip: string;
  bowlerPhoneNumber: string;
  teamName: Team; // This is where we are passing the team which includes the teamID, teamName, and captainID.
};
