export interface IResponseBasic {
    infected: number;
    tested: number;
    recovered: number;
    deceased: number;
    infectedByRegion: [];
}

export interface InfectedByRegion {

          region: Московская область,
          isoCode: RU-MOS,
          infected: 214590,
          recovered: 175136,
          deceased: 4681
}