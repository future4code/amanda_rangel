  import { setPosts, setSelectedPost, setPostDetails } from './allActions'

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


  describe("Posts Actions-Creators", () => {
    test("Set Posts", () => {
      const expectedResult = {
        type: "SET_POSTS",
        payload: {
          posts: mockPosts,
        }
      };
      const result = setPosts(mockPosts);
      expect(expectedResult).toMatchObject(result);
    });
      test("Set Selected Post", () => {
        const expectedResult = {
          type: "SET_SELECTED_POST",
          payload: {
            postId: "1",
          }
        };
        const result = setSelectedPost("1");
        expect(expectedResult).toMatchObject(result);
      });
      test("Set Post Details ", () => {
        const expectedResult = {
          type: "SET_POST_DETAILS",
          payload: {
            postDetails: mockPostDetails,
          }
        };
        const result = setPostDetails(mockPostDetails);
        expect(expectedResult).toMatchObject(result);
    });
  });
