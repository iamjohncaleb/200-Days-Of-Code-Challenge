const { expect } = require("chai");

describe("SecureElectionVoting", function () {
    let election, owner, addr1, addr2;
    const candidates = ["Candidate 1", "Candidate 2", "Candidate 3"];

    beforeEach(async () => {
        [owner, addr1, addr2] = await ethers.getSigners();
        const Election = await ethers.getContractFactory("SecureElectionVoting");
        election = await Election.deploy();
        await election.deployed();
    });

    it("should start an election", async function () {
        await election.startElection("2023 Presidential Election", 60, candidates);
        expect(await election.electionTitle()).to.equal("2023 Presidential Election");
    });

    it("should allow the admin to add new candidates", async function () {
        await election.addCandidate("Candidate 4");
        expect(await election.candidates(3)).to.equal("Candidate 4");
    });

    it("should allow users to vote", async function () {
        await election.startElection("2023 Presidential Election", 60, candidates);
        await election.connect(addr1).vote("Candidate 1");
        expect(await election.candidateVotes("Candidate 1")).to.equal(1);
    });

    it("should prevent double voting", async function () {
        await election.startElection("2023 Presidential Election", 60, candidates);
        await election.connect(addr1).vote("Candidate 1");
        await expect(election.connect(addr1).vote("Candidate 2")).to.be.revertedWith("You have already voted");
    });

    it("should end election and declare winner", async function () {
        await election.startElection("2023 Presidential Election", 60, candidates);
        await election.connect(addr1).vote("Candidate 1");
        await election.connect(addr2).vote("Candidate 1");
        await election.endElection();

        const winner = await election.getWinner();
        expect(winner).to.equal("Candidate 1");
    });
});
