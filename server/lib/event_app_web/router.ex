defmodule EventAppWeb.Router do
  use EventAppWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", EventAppWeb do
    get "/", PageController, :index
  end

  scope "/api/v1", EventAppWeb do
    pipe_through :api

    resources "/users", UserController, except: [:new, :edit]
    resources "/events", EventController, except: [:new, :edit]
    resources "/comments", CommentController, except: [:new, :edit]
    resources "/invitations", InvitationController, except: [:new, :edit]
  end
  # Other scopes may use custom stacks.
  # scope "/api", EventAppWeb do
  #   pipe_through :api
  # end

  # Enables LiveDashboard only for development
  #
  # If you want to use the LiveDashboard in production, you should put
  # it behind authentication and allow only admins to access it.
  # If your application does not have an admins-only section yet,
  # you can use Plug.BasicAuth to set up some basic authentication
  # as long as you are also using SSL (which you should anyway).
  if Mix.env() in [:dev, :test] do
    import Phoenix.LiveDashboard.Router

    scope "/" do
      pipe_through [:fetch_session, :protect_from_forgery]
      live_dashboard "/dashboard", metrics: PhotoBlogWeb.Telemetry
    end
  end
end
