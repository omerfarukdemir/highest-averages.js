import { PoliticalParty } from '../../src/models/political_party'
import { InvalidVotes } from '../../src/models/invalid_votes'
import { CandidateResult } from '../../src/models/candidate_result'
import { Dutch2021 } from '../../src/elections/dutch'
import { Candidate } from '../../src/models/candidate'

describe('Dutch', () => {
  it('2021', () => {
    // https://en.wikipedia.org/wiki/2021_Dutch_general_election

    const vvd = new PoliticalParty('VVD', 2279130)
    const d66 = new PoliticalParty('D66', 1565861)
    const pvv = new PoliticalParty('PVV', 1124482)
    const cda = new PoliticalParty('CDA', 990601)
    const sp = new PoliticalParty('SP', 623371)
    const pvda = new PoliticalParty('PvdA', 597192)
    const gl = new PoliticalParty('GL', 537308)
    const fvd = new PoliticalParty('FvD', 523083)
    const pvdd = new PoliticalParty('PvdD', 399750)
    const cu = new PoliticalParty('CU', 351275)
    const volt = new PoliticalParty('Volt', 252480)
    const ja21 = new PoliticalParty('JA21', 246620)
    const sgp = new PoliticalParty('SGP', 215249)
    const denk = new PoliticalParty('DENK', 211237)
    const plus50 = new PoliticalParty('50+', 106702)
    const bbb = new PoliticalParty('BBB', 104319)
    const bij1 = new PoliticalParty('BIJ1', 87238)
    const co = new PoliticalParty('CO', 40731)
    const nida = new PoliticalParty('NIDA', 33834)
    const splinter = new PoliticalParty('Splinter', 30328)
    const pirateParty = new PoliticalParty('Pirate Party', 22816)
    const jong = new PoliticalParty('JONG', 15297)
    const trotsOpNederland = new PoliticalParty('Trots op Nederland', 13198)
    const lhk = new PoliticalParty('LHK', 9264)
    const nlBeter = new PoliticalParty('NLBeter', 8657)
    const list30 = new PoliticalParty('List 30', 8277)
    const libertarianParty = new PoliticalParty('Libertarian Party', 5546)
    const opRecht = new PoliticalParty('OpRecht', 5449)
    const jesusLives = new PoliticalParty('Jesus Lives', 5015)
    const pvdt = new PoliticalParty('PvdT', 3744)
    const ucf = new PoliticalParty('UCF', 1880)
    const freeAndSocialNetherlands = new PoliticalParty('Free and Social Netherlands', 942)
    const partyOfUnity = new PoliticalParty('Party of Unity', 1880)
    const weAreTheNetherlands = new PoliticalParty('We Are the Netherlands', 553)
    const modernNetherlands = new PoliticalParty('Modern Netherlands', 245)
    const partyForTheRepublic = new PoliticalParty('Party for the Republic', 255)
    const theGreens = new PoliticalParty('The Greens', 119)
    const invalid = new InvalidVotes(39825)

    const candidates = [vvd, d66, pvv, cda, sp, pvda, gl, fvd, pvdd, cu, volt, ja21, sgp, denk, plus50, bbb, bij1, co, nida,
      splinter, pirateParty, jong, trotsOpNederland, lhk, nlBeter, list30, libertarianParty, opRecht, jesusLives, pvdt,
      ucf, freeAndSocialNetherlands, partyOfUnity, weAreTheNetherlands, modernNetherlands, partyForTheRepublic,
      theGreens, invalid]

    const results = new Dutch2021().apply(candidates)

    const candidateResult = (candidate: Candidate): CandidateResult => results
      .filter(candidateResult => candidateResult.name() === candidate.name)[0]

    expect(candidateResult(vvd).seat).toBe(34)
    expect(candidateResult(d66).seat).toBe(24)
    expect(candidateResult(pvv).seat).toBe(17)
    expect(candidateResult(cda).seat).toBe(15)
    expect(candidateResult(sp).seat).toBe(9)
    expect(candidateResult(pvda).seat).toBe(9)
    expect(candidateResult(gl).seat).toBe(8)
    expect(candidateResult(fvd).seat).toBe(8)
    expect(candidateResult(pvdd).seat).toBe(6)
    expect(candidateResult(cu).seat).toBe(5)
    expect(candidateResult(volt).seat).toBe(3)
    expect(candidateResult(ja21).seat).toBe(3)
    expect(candidateResult(sgp).seat).toBe(3)
    expect(candidateResult(denk).seat).toBe(3)
    expect(candidateResult(plus50).seat).toBe(1)
    expect(candidateResult(bbb).seat).toBe(1)
    expect(candidateResult(bij1).seat).toBe(1)
    expect(candidateResult(co).seat).toBe(0)
    expect(candidateResult(nida).seat).toBe(0)
    expect(candidateResult(splinter).seat).toBe(0)
    expect(candidateResult(pirateParty).seat).toBe(0)
    expect(candidateResult(jong).seat).toBe(0)
    expect(candidateResult(trotsOpNederland).seat).toBe(0)
    expect(candidateResult(lhk).seat).toBe(0)
    expect(candidateResult(nlBeter).seat).toBe(0)
    expect(candidateResult(list30).seat).toBe(0)
    expect(candidateResult(libertarianParty).seat).toBe(0)
    expect(candidateResult(opRecht).seat).toBe(0)
    expect(candidateResult(jesusLives).seat).toBe(0)
    expect(candidateResult(pvdt).seat).toBe(0)
    expect(candidateResult(ucf).seat).toBe(0)
    expect(candidateResult(freeAndSocialNetherlands).seat).toBe(0)
    expect(candidateResult(partyOfUnity).seat).toBe(0)
    expect(candidateResult(weAreTheNetherlands).seat).toBe(0)
    expect(candidateResult(modernNetherlands).seat).toBe(0)
    expect(candidateResult(partyForTheRepublic).seat).toBe(0)
    expect(candidateResult(theGreens).seat).toBe(0)
  })
})
