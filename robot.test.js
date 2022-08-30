const {createRobot} = require(".");
describe("createRobot", () => {
    it("must move the robot at the specified coordinates", () => {
      expect(createRobot("RAALAL",7,3,0)).toStrictEqual([9,4]);
      expect(createRobot("RAALA",9,4,0)).toBe(`error over the limits`);
      expect(createRobot("RAALA",11,10,0)).toBe(`the values entered are not valid`);

    });

  });
  
 
