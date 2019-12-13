import posts from "./posts";

const mockPosts = [
  {
    "votesCount": 1,
    "userVoteDirection": 1,
    "commentsNumber": 2,
    "id": "XFM8JtoESiWKqCml3Rjz",
    "username": "darvas",
    "text": "Oi gente! Bem vindos ao 4eddit :)"
  },
  {
    "votesCount": 2,
    "userVoteDirection": -1,
    "commentsNumber": 3,
    "id": "12345",
    "username": "me",
    "text": "Hello, World",
  }
];

const mockPostDetails =
  {
    "post": {
      "comments": [
        {
          "votesCount": -1,
          "userVoteDirection": -1,
          "id": "RVxZpEL8AaSaoA9nOWNF",
          "username": "me",
          "text": "Hello!"
        },
        {
          "votesCount": 0,
          "userVoteDirection": 0,
          "id": "juOJJjXFi4ToIdY20wQf",
          "username": "me",
          "text": "Bye!"
        }
      ],
      "votesCount": 1,
      "userVoteDirection": 1,
      "commentsNumber": 2,
      "id": "XFM8JtoESiWKqCml3Rjz",
      "username": "darvas",
      "text": "Oi gente! Bem vindos ao 4eddit :)"
    }
  };

describe("Posts Reducer", () => {
  test("Set Posts", () => {
    const testAction = {
      type: "SET_POSTS",
      payload: {
        posts: mockPosts,
      }
    };
    const newState = posts(undefined, testAction);
    expect(newState.posts).toMatchObject(mockPosts);
    expect(newState.posts).toHaveLength(2);
    expect(newState.posts[1].text).toBe("Hello, World")
  });
  test("Set Post Details", () => {
    const testAction = {
      type: "SET_POST_DETAILS",
      payload: {
        postDetails: mockPostDetails,
      }
    };
    const newState = posts(undefined, testAction);
    expect(newState.postDetails).toMatchObject(mockPostDetails);
  })
});