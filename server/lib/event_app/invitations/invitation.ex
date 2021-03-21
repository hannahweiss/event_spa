defmodule EventApp.Invitations.Invitation do
  use Ecto.Schema
  import Ecto.Changeset

  schema "invitations" do
    field :body, :string
    field :event_id, :id
    field :user_id, :id

    timestamps()
  end

  @doc false
  def changeset(invitation, attrs) do
    invitation
    |> cast(attrs, [:body])
    |> validate_required([:body])
  end
end
