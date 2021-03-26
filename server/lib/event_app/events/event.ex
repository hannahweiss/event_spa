defmodule EventApp.Events.Event do
  use Ecto.Schema
  import Ecto.Changeset

  schema "events" do
    field :date, :date
    field :description, :string
    field :name, :string
    field :user_id, :id
    has_many :comments, EventApp.Comments.Comment, on_delete: :delete_all
    has_many :invitations, EventApp.Invitations.Invitation, on_delete: :delete_all

    timestamps()
  end

  @doc false
  def changeset(event, attrs) do
    event
    |> cast(attrs, [:name, :date, :description, :user_id])
    |> validate_required([:name, :date, :description])
    |> IO.inspect()
  end
end
