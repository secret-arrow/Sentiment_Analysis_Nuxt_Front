import { NFID } from "@nfid/embed";
import { Identity } from "@dfinity/agent";

// type NFIDConfig = {
//     origin?: string; // default is "https://nfid.one"
//     application?: { // your application details to display in the NFID iframe
//       name?: string; // your app name user can recognize
//       logo?: string; // your app logo user can recognize
//     };
//     identity?: SignIdentity;
//     storage?: AuthClientStorage;
//     keyType?: "ECDSA" | "ed25519" // default is "ECDSA"
//     idleOptions?: IdleOptions;
//   };

export const authentication = async () => {
    const nfid = await NFID.init({});
    const identity: Identity = nfid.getIdentity();
    const delegationIdentity: Identity = await nfid.getDelegation({
        // optional targets ICRC-28 implementation, but required to support universal NFID Wallet auth
        targets: ["c76k4-uaaaa-aaaal-advkq-cai"],
        // optional derivationOrigin in case you're running on a custom domain
        derivationOrigin: "https://icp0.io/",
        // optional maxTimeToLive defaults to 8 hours in nanoseconds;
        maxTimeToLive: BigInt(8) * BigInt(3_600_000_000_000)
    });
}

// enum DelegationType {
//     GLOBAL = 0,
//     ANONYMOUS = 1,
// }

// const delegationType: DelegationType = nfid.getDelegationType();