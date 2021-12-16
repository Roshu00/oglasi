import React, { useEffect, useState } from "react";
import { getProfile } from "../../helpers/getData";
import dateFormat from "dateformat";

//components
import Post from "../Post/post";

//photos
import UsernameSVG from "../../images/svg/person2.svg";
import AddressSVG from "../../images/svg/location.svg";
import PhoneSVG from "../../images/svg/phone.svg";
import AtSignSVG from "../../images/svg/at_sign.svg";

import {
  ProfileContainer,
  ProfileImage,
  MainContainer,
  GeneralInformation,
  UserInformationContainer,
  Username,
  Rating,
  UserInformationText,
  StarContainer,
  PostsContainer,
} from "./styles/ViewProfile";

function ViewProfile({ id }) {
  const [profileInfo, setProfileInfo] = useState({});

  useEffect(() => {
    getProfile({ id }).then((data) => setProfileInfo(data));
  }, []);

  console.log(profileInfo);
  return (
    <ProfileContainer>
      <MainContainer>
        <GeneralInformation>
          <ProfileImage cloudName="oglasi" publicId={profileInfo.image_url} />
          <UserInformationContainer>
            <Username>
              <img src={AtSignSVG} />
              {profileInfo.username}
            </Username>
            <UserInformationText>
              <img src={UsernameSVG} />
              {profileInfo.name} {profileInfo.last_name}
            </UserInformationText>
            <UserInformationText>
              <img src={AddressSVG} />
              {profileInfo.address}
            </UserInformationText>
            <UserInformationText>
              <img src={PhoneSVG} />
              {profileInfo.phone_number}
            </UserInformationText>
          </UserInformationContainer>
        </GeneralInformation>
        <Rating>
          {profileInfo.rating}
          <StarContainer>*****</StarContainer>
        </Rating>
      </MainContainer>
      {!profileInfo.posts ? (
        "dont have any posts"
      ) : (
        <PostsContainer>
          {profileInfo.posts.map((post) => {
            return (
              <Post.Card to={`/post/${post.postId}`} key={post.postId}>
                <Post.Image imagePath={post.imagesPath} />
                <Post.InfoContainer>
                  <Post.Title used={post.used}>
                    {post.brand + " " + post.model}
                  </Post.Title>
                  <Post.Description>{post.description}</Post.Description>
                  <Post.Footer>
                    <Post.SmallInfo>
                      <Post.Seller>{profileInfo.username}</Post.Seller>
                      <Post.Date>
                        {dateFormat(post.created_at, "dddd, mmmm dS, yyyy")}
                      </Post.Date>
                    </Post.SmallInfo>
                    <Post.Price>{post.price}</Post.Price>
                  </Post.Footer>
                </Post.InfoContainer>
              </Post.Card>
            );
          })}
        </PostsContainer>
      )}
    </ProfileContainer>
  );
}

export default ViewProfile;
