import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/home";
import dotenv from "dotenv";
import { PostListContext } from "./Contexts/postContext";
import { UserDataContext } from "./Contexts/userContext";
import { PhoneListContext } from "./Contexts/phonesContext";
import Login from "./routes/login";
import CreatePost from "./routes/createPost";
import CreateProfile from "./routes/createProfile";
import Post from "./routes/post";
import UpdateProfile from "./routes/updateProfile";
import FillterPosts from "./routes/filterPosts";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { PrivateRoute, PublicRoute } from "./helpers/PrivateRoute";
import Profile from "./routes/Profile";
import Search from "./routes/search";
import SearchPhone from "./routes/searchPhone";

dotenv.config();

function App() {
  return (
    <div>
      <UserDataContext>
        <PostListContext>
          <PhoneListContext>
            <Router>
              <NavigationBar />
              <Switch>
                <Route path="/" exact>
                  <Home />
                </Route>
                {
                  // OVO PROMENITI NAKON STO ZAVRSIS SEARCH PAGE
                }
                <Route path="/search/ss" exact>
                  <FillterPosts />
                </Route>
                <PublicRoute
                  path="/login"
                  restricted={true}
                  component={Login}
                  exact
                />
                <PublicRoute
                  path="/profile/create"
                  restricted={true}
                  component={CreateProfile}
                  exact
                />
                <PublicRoute
                  path="/viewprofile/:id"
                  component={Profile}
                  exact
                />
                <PublicRoute path="/search" component={Search} exact />
                <PublicRoute
                  path="/search/:brand/:model/:lowPrice/:highPrice/:used"
                  component={SearchPhone}
                  exact
                />

                <PrivateRoute
                  path="/create/post"
                  component={CreatePost}
                  exact
                />
                <PrivateRoute
                  path="/profile/update"
                  component={UpdateProfile}
                  exact
                />
                <Route path="/post/:id">
                  <Post />
                </Route>
              </Switch>
            </Router>
          </PhoneListContext>
        </PostListContext>
      </UserDataContext>
    </div>
  );
}

export default App;
