"use client";

import {
  dreamMayorAtom,
  dreamSchoolAtom,
  edLevelAtom,
  linkedInAccountAtom,
} from "../../utils/atoms";
import axios from "axios";
import { useEffect } from "react";
import { useAtom } from "jotai";

export default () => {
  const [dreamMayor, setDreamMayor] = useAtom(dreamMayorAtom);
  const [dreamSchool, setDreamSchool] = useAtom(dreamSchoolAtom);
  const [edLevel, setEdLevel] = useAtom(edLevelAtom);
  const [linkedInAccount, setLinkedInAccount] = useAtom(linkedInAccountAtom);

  const sendFrom = async () => {
    console.log("edLevel:   ", dreamMayor);
    console.log("dreamSchool:   ", dreamSchool);
    console.log("dreamMayor:    ", edLevel);
    console.log("linkedInAccount:   ", linkedInAccount);

    // Add your API url here:
    const repsonse = await axios.post("/yourAPI", {
      dreamMayor,
      dreamSchool,
      edLevel,
      linkedInAccount,
    });
    console.log(repsonse);
  };

  useEffect(() => {
    sendFrom();
  }, []);

  return (
    <div>
      <h1>Amazing, we are getting recomendations for you</h1>
      <img
        href={
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Floading&psig=AOvVaw3Udepajbj1n9CrrQQNShbs&ust=1687160658571000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOCTlLCpzP8CFQAAAAAdAAAAABAE"
        }
      />
    </div>
  );
};
